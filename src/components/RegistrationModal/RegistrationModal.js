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
			<label className={styles.label}>Email :</label>
			<input
				value={user.email}
				className={styles.input}
				name="email"
				placeholder="your@email.com"
				onChange={handleChange}
			></input>
			<label className={styles.label}>Password :</label>
			<input
				value={user.password}
				className={styles.input}
				name="password"
				placeholder="password"
				onChange={handleChange}
			></input>
			<div className={styles.btnWrapper}>
				<button type="button" className={styles.modalBtn} onClick={onLogin}>
					Log In
				</button>
				<button type="button" className={styles.modalBtn}>
					Registration
				</button>
			</div>
		</div>
	);
}
