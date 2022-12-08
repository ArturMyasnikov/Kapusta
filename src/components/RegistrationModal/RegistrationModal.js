import { useState } from 'react';
import styles from './registrationModal.module.css';
import { FcGoogle } from 'react-icons/fc';

const defaultValues = { email: '', password: '' };

export default function RegistrationModal() {
	const [user, setUser] = useState(defaultValues);

	const handleChange = event => {
		const { name, value } = event.target;

		setUser(prevState => ({ ...prevState, [name]: value }));
	};

	const onLogin = event => {
		localStorage.setItem('user', JSON.stringify(user));
		setUser(defaultValues);
	};
	return (
		<div className={styles.modal}>
			<p className={styles.googleText}>
				You can log in with your Google Account:
			</p>
			<button type="button" className={styles.googleBtn}>
				<FcGoogle size={18} />
				<span className={styles.googleBtnText}>Google</span>
			</button>
			<p className={styles.loginText}>
				Or log in using an email and password, after registering:
			</p>
			<form>
				<label className={styles.label}>
					Email :
					<input
						value={user.email}
						className={styles.input}
						type="email"
						name="email"
						placeholder="your@email.com"
						pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
						title="This is a required field"
						required
						onChange={handleChange}
					></input>
				</label>
				<label className={styles.label}>
					Password :
					<input
						value={user.password}
						className={styles.input}
						type="email"
						name="password"
						placeholder="password"
						required
						onChange={handleChange}
					></input>
				</label>

				<div className={styles.btnWrapper}>
					<button type="submit" className={styles.modalBtn} onClick={onLogin}>
						Log In
					</button>
					<button type="button" className={styles.modalBtn}>
						Registration
					</button>
				</div>
			</form>
		</div>
	);
}
