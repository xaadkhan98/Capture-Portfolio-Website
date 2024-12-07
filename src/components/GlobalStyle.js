import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box; font-family: Inter, sans-serif;
  
  

}
html{
    
    @media (max-width:1700px) {
        font-size: 75%;
        
    }
    @media (max-width: 1250px) {
        font-size: 65%;
        h4{
            font-size: 1rem;
        }
    }
}

body{
    background-color: #1b1b1b;
    overflow-x: hidden;
   
   
}


button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background-color: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
    
}
h2{
    font-weight: lighter;
    font-size: 4rem;
   
    

}
h3{
    color: white;
}
h4{
    font-weight: bold;
    font-size: 2rem;
    
    
}
span{
    font-weight: bold;
    color: #23d997;
}
h1{
    font-size: 1.1rem
}
p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
    
`;
export default GlobalStyle;
