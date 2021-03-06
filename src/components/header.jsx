import React, {useRef} from 'react';
import styles from './header.module.css'

function Header({onSearch}) {

    const inputRef = useRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputRef.current.value;
        value && onSearch(value)
        inputRef.current.value = ''
    }
    const onClick = () => {
        const value = inputRef.current.value;
        onSearch(value)
    }
    return (
        <header className={styles.header}>
            <div className={styles.headerLogo}>
                <button className={styles.logo} onClick={onClick}>
                    <i className="fab fa-youtube"/>
                </button>
                <span className={styles.youtube}>Youtube</span>
            </div>

            <form className={styles.search_input} onSubmit={onSubmit} >
                <input
                    className={styles.input}
                    ref={inputRef}
                    type="text"
                    placeholder="Search.."
                />
                <button className={styles.search}>
                    <i className="fas fa-search"/>
                </button>
            </form>
        </header>
    );
}

export default Header;