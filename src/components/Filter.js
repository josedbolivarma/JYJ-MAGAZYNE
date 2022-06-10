import React from 'react';
import styles from "../styled/Filter.module.scss";

const Filter = ({ product, setData, data }) => {

    const handleChange = (e) => {
        const { value } = e.target
        if (value === "") {
            setData(product)
        } else {
            const newData = product.filter(prod => prod.categoria.toLowerCase().includes(value.toLowerCase()))
            setData(newData)
        }
    }

    return (
        <div className={styles.filter_container}>
            <select onChange={handleChange}>
                <option value="">All</option>
                <option value="aumento">Aumento</option>
                <option value="funcional">Funcional</option>
                <option value="definici">Definicion</option>
                <option value="competici">Competicion</option>
            </select>
        </div>
    )
}

export default Filter