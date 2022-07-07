import uuid from 'uuidv4';

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // register the error
        localStorage.setItem(
            `errorLog-${uuid()}`,
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
