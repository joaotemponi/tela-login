import Cabecalho from "../../components/Cabecalho/Cabecalho";
import Rodape from "../../components/Rodape/Rodape";
import LoginForm from "../../components/Formularios/LoginForm/LoginForm";
import FormAluno from "../../components/Formularios/FormAluno/FormAluno";
import FormLivro from "../../components/Formularios/FormLivro/FormLivro";

function PLogin() {
    return (
        <>
            <Cabecalho />
            <FormLivro />
            {/* <FormAluno /> */}
            {/* <LoginForm /> */}
            <Rodape />
        </>
    );
}

export default PLogin;