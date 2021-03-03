import React from 'react';
import styles from './header.module.css'

function Header(props) {

    const inputRef = React.createRef();

    const onSubmit = (event) => {
        event.preventDefault();
        const value = inputRef.current.value;
        value && props.onAdd(value)
        inputRef.current.value = ''
    }
    return (
        <header>
            <div className={styles.headerLogo}>
                <button className={styles.logo}>
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