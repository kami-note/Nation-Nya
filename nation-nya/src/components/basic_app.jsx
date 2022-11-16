function NaveBar(props) {
    return (
        <div>
            <div>
                <nav>
                    <ul id="nav-ul"><li id="nav-title"><a id="nav-a"  href="#">Test</a></li></ul>
                    <ul id="nav-ul">
                        <li id="nav-text"><a href="#" id="nav-a">Area 1</a></li>
                        <li id="nav-text"><a href="#" id="nav-a">Area 2</a></li>
                        <li id="nav-text"><a href="#" id="nav-a">Area 3</a></li>
                    </ul>
                    <ul id="nav-ul"><p id="nav-menssagens">Seu nome é: {props.Nome}!</p></ul>
                    
                </nav>
            </div>
        </div>
    )    
}

export default NaveBar;