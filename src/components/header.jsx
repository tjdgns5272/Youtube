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
        <div className={styles.header}>
            <button className={styles.logo}>
                <i className="fab fa-youtube"/>
            </button>
            <span className={styles.youtube}>Youtube</span>

            <form className={styles.search_input} onSubmit={onSubmit} placeholder="Search">
                <input
                    className={styles.input}
                    ref={inputRef}
                    type="text"
                />
                <button className={styles.search}>
                    <i className="fas fa-search"/>
                </button>
            </form>
        </div>
    );
}

export default Header;