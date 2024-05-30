from flask import Flask, request, render_template, redirect, url_for
import mysql.connector


app = Flask(__name__, template_folder='.')

# Підключення до бази даних MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="A1b3c29f7",  # Замініть на свій пароль
    database="bookportal"
)
cursor = db.cursor()

# Додамо таблицю `users`, якщо її не існує
cursor.execute("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, email VARCHAR(255), password VARCHAR(255))")

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/register", methods=["POST"])
def register():
    email = request.form["username"]
    password = request.form["password"]

    # Перевірка, чи користувач уже зареєстрований
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    if cursor.fetchone():
        return render_template("errors/errorRegister.html")

    # Додавання нового користувача
    cursor.execute("INSERT INTO users (email, password) VALUES (%s, %s)", (email, password))
    db.commit()
    return redirect(url_for("index"))

@app.route("/login", methods=["POST"])
def login():
    email = request.form["username"]
    password = request.form["password"]

    # Пошук користувача за email
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    if user:
        stored_password = user[2]  # Пароль з бази даних
        if password == stored_password:
            return redirect(url_for("index"))
    return render_template("errors/errorLogin.html")

if __name__ == "__main__":
    app.run(debug=True)
