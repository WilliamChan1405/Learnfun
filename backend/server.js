const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Folder untuk menyimpan avatar

// Konfigurasi MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'laravel_auth' 
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Konfigurasi multer untuk menyimpan file avatar
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

// Route untuk Sign Up
app.post('/api/signup', async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: 'affa iyah' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length > 0) {
            return res.status(400).json({ message: 'Email sudah digunakan' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        db.query(
            'INSERT INTO users (name, email, password, created_at, updated_at) VALUES (?, ?, ?, NOW(), NOW())',
            [username, email, hashedPassword],
            (error) => {
                if (error) {
                    return res.status(500).json({ message: 'Database error saat menyimpan user' });
                }
                res.status(201).json({ message: 'Akun berhasil dibuat' });
            }
        );
    });
});

// Route untuk Login
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email dan password harus diisi' });
    }

    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(400).json({ message: 'Email tidak ditemukan' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password salah' });
        }

        res.status(200).json({ message: 'Login berhasil', user: { id: user.id, name: user.name, email: user.email } });
    });
});

// Endpoint untuk mengganti password
app.post('/api/change-password', async (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;

    if (!userId || !oldPassword || !newPassword) {
        return res.status(400).json({ message: 'Data tidak lengkap' });
    }

    db.query('SELECT * FROM users WHERE id = ?', [userId], async (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }
        if (results.length === 0) {
            return res.status(400).json({ message: 'User tidak ditemukan' });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password lama tidak sesuai' });
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 10);
        db.query('UPDATE users SET password = ? WHERE id = ?', [hashedNewPassword, userId], (err) => {
            if (err) {
                return res.status(500).json({ message: 'Gagal mengupdate password' });
            }
            res.status(200).json({ message: 'Password berhasil diubah' });
        });
    });
});

// Endpoint untuk mengunggah avatar
app.post('/api/update-avatar', upload.single('avatar'), (req, res) => {
    const userId = req.body.userId;
    const avatarPath = `http://localhost:${PORT}/uploads/${req.file.filename}`;

    db.query('UPDATE users SET avatar = ? WHERE id = ?', [avatarPath, userId], (error) => {
        if (error) {
            return res.status(500).json({ message: 'Gagal mengupdate avatar' });
        }
        res.status(200).json({ message: 'Avatar berhasil diubah', avatarUrl: avatarPath });
    });
});


app.post('/api/questions', (req, res) => {
    const { body, userId } = req.body;

    // Validasi input
    if (!body || !userId) {
        return res.status(400).json({ message: 'Pertanyaan tidak boleh kosong.' });
    }

    // Tambahkan created_at saat menyimpan pertanyaan
    db.query('INSERT INTO questions (user_id, body, created_at) VALUES (?, ?, NOW())', [userId, body], (error) => {
        if (error) {
            console.error('Error saving question:', error);
            return res.status(500).json({ message: 'Gagal menyimpan pertanyaan.' });
        }
        res.status(201).json({ message: 'Pertanyaan berhasil diajukan.' });
    });
});


app.get('/api/questions', (req, res) => {
    db.query(`
        SELECT q.id, q.body, DATE_FORMAT(q.created_at, '%Y-%m-%dT%H:%i:%s') as created_at , u.name AS userName, u.avatar AS userAvatar 
        FROM questions q 
        JOIN users u ON q.user_id = u.id 
        ORDER BY q.created_at DESC
    `, (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Gagal mengambil pertanyaan.' });
        }
        res.status(200).json(results);
    });
});


app.get('/api/questions/:id', (req, res) => {
    const { id } = req.params;
    db.query(`
        SELECT q.id, q.body, q.created_at, u.name AS userName, u.avatar AS userAvatar 
        FROM questions q 
        JOIN users u ON q.user_id = u.id 
        WHERE q.id = ?
    `, [id], (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Gagal mengambil pertanyaan.' });
        }
        if (results.length > 0) {
            res.status(200).json(results[0]);
        } else {
            res.status(404).json({ message: 'Pertanyaan tidak ditemukan.' });
        }
    });
});

app.post('/api/answers', (req, res) => {
    const { question_id, user_id, answer } = req.body;
  
    if (!question_id || !user_id || !answer) {
      return res.status(400).json({ message: 'All fields are required.' });
    }
  
    db.query(
      'INSERT INTO answers (question_id, user_id, answer, created_at) VALUES (?, ?, ?, NOW())',
      [question_id, user_id, answer],
      (error, results) => {
        if (error) {
          console.error('Error saving answer:', error);
          return res.status(500).json({ message: 'Failed to save answer.' });
        }
        res.status(201).json({ message: 'Answer submitted successfully.' });
      }
    );
  });
  

// Fetch answers for a question sorted by the number of likes
app.get('/api/questions/:id/answers', (req, res) => {
    const questionId = req.params.id;
  
    db.query(`
      SELECT a.id, a.answer, a.created_at, u.name AS userName, u.avatar AS userAvatar, 
             (SELECT COUNT(*) FROM likes WHERE answer_id = a.id) AS likeCount
      FROM answers a
      JOIN users u ON a.user_id = u.id
      WHERE a.question_id = ?
      ORDER BY likeCount DESC, a.created_at DESC
    `, [questionId], (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Failed to fetch answers.' });
      }
      res.status(200).json(results);
    });
  });
  
  // Add a like to an answer
  app.post('/api/answers/:id/like', (req, res) => {
    const answerId = req.params.id;
    const { userId } = req.body;
  
    db.query('SELECT * FROM likes WHERE answer_id = ? AND user_id = ?', [answerId, userId], (error, results) => {
      if (error) {
        return res.status(500).json({ message: 'Database error.' });
      }
      if (results.length > 0) {
        return res.status(400).json({ message: 'User has already liked this answer.' });
      }
  
      db.query('INSERT INTO likes (answer_id, user_id, created_at) VALUES (?, ?, NOW())', [answerId, userId], (error) => {
        if (error) {
          return res.status(500).json({ message: 'Failed to like answer.' });
        }
        res.status(200).json({ message: 'Answer liked successfully.' });
      });
    });
  });
  

  
// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
