export function Titulo(props) {
return (
    <h1 style={{color: props.cor}}>
        Titulo da pagina é:
        {props.children}
    </h1>
    );
}