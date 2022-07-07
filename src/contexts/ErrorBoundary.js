import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // register the error
        const newId = Math.floor(Math.random() * 1000);
        localStorage.setItem(
            `errorLog-${newId}`,
            JSON.stringify(error, errorInfo)
        );
    }

    render() {
        if (this.state.hasError) {
            // Você pode renderizar qualquer UI alternativa
            return (
                <h1>
                    Ocorreu um erro! Um relatório já foi enviado para o
                    desenvolvedor e em breve resolveremos a situação.
                </h1>
            );
        }

        return this.props.children;
    }
}
