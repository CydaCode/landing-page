// import styled from 'styled-components';


// export const NavbarSection = styled.section`

// .class-width {
//     background-color: #32376F;
//     width: 100%;
//     opacity: 0.9;
//     display: flex;
//     padding: 0.8rem 10%;
//     justify-content: space-between;
// }

// .logo-text {
//     display: flex;
//     flex-direction: column;
//     text-align: center;
//     align-items: center;
//     }

// .all {
//     display: flex;
//     justify-content: space-between;
// }
// .nav-width {
//     display: flex;
//     justify-content: end;
//     align-items: center;
//     font-family: 'Raleway';
//     height: 80px;
//     background-color: var(--darkgreen);
//     max-width: 100%;
//     /* padding: 9rem; */
//     color: var(--white);
// }
 
// .menu-bars {
//     display: none;
//     font-size: 2rem;
//     background-color: none;
// }

// .nav-menu {
//     background-color: var(--darkgreen);
//     /* margin-top:115%; */
//     /* margin-left: -4rem; */
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     position: fixed;
//     color: var(--white);
//     top: 0;
//     right: -100%;
//     width: 250px;
//     z-index: 2;
// }

// .nav-menu.active {
//     right: 0;
//     transition: 350ms;
// }

// .nav-text {
//     display: flex;
//     justify-content: end;
//     align-items: center;
//     padding: 8px 0px 8px 16px;
//     list-style-type: none;
//     height: 60px;
// }

// .nav-text a {
//     text-decoration: none;
//     color: var(--white);
//     font-size: 18px;
//     width: 95%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     padding: 0 16px;
//     outline: none;
    
// }

// .nav-text a:hover {
//     border-bottom: 2px solid var(--Lightred);
//     border-radius: 4px;
// }

// .nav-menu-items {
//     width: 70%;
// }

// .navbar-toggle {
//     background-color: var(--darkgreen);
//     width: 100%;
//     height: 40px;
//     display: flex;
//     justify-content: start;
//     align-items: center;
// }



// .nav-width h1 {
//     color: var(--white);
// }

// .nav-width span {
//     color: var(--Lightred);
// }

// .container {
//     padding: 0 2rem;
   
// }

// .menu ul {
//     display: flex;
//     justify-content: space-around;
//     list-style-type: none;
//     padding-top: 1rem;
//     text-decoration: none;
// }
// .menu ul li {
//     width: 5rem;
//     text-align: center;
//     font-size: 1.2rem;
//     color: white;
//     margin: 0 8px;
//     line-height: 80px;
//     cursor: pointer;
//     font-weight: 500;
    
// }

// .menu ul li:hover{
//     opacity: 0.7;
//     color: var(--white);
//     border-bottom: 2px solid var(--Lightred);
//     padding: 0.5rem 1rem;
//     border-radius: 5px;
//     font-weight: 400;

// }

// .header {
//     text-align: left;
//     background-color: var(--darkgreen);
//     width: 100%;
//     color: white;
// }

// .menu ul li:active {
//     text-decoration: none;
// }

// @media (max-width: 604px) {
//     .menu ul {
//         display: flex;
//         justify-content: space-around;
//         list-style-type: none;
//         padding-top: 1rem;
//     }

// .menu-bars {
//     display: flex;
//     font-size: 2rem;
//     background-color: none;
// }
// }
// `
 




import styled from 'styled-components';


export const NavbarSection = styled.section`
    .class-width {
        background-color: #32376F;
        width: 100%;
        opacity: 0.9;
        display: flex;
        padding: 0.8rem 10%;
        justify-content: space-between;
    }

    .logo-text {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    .imgs {
        width: 250px;
    }

    .imgs img {
        width: 100%;
    }

    .imgs img::after {
        content: '';
        width: 200px;
        height: 200px;
        background-color: #fff;
        z-index: 2;
    }

    .logo-text small{
        display:flex;
        justify-content: left;
        align-items:center;
        color: #fff;
    }

    .nav-menu ul{
        display: flex;
        gap: 1.5rem;
        list-style: none;
        padding-top: 0.7rem;
    }

    .nav-menu ul li a{
        color: #fff;
        text-decoration: none;
        z-index: 2;
    }

    .menu-bars {
        display: none;
        font-size: 2rem;
        background-color: transparent;
        padding: 0.7rem 0.9rem 0;
    }





    /* *************MEDIA QUERIES (MEDIUM DEVICES) */

@media screen and (max-width: 1024px) {
  .container {
    width: var(--container-width-md);
  }  

  .class-width {
        padding: 0.8rem 6%;
    }
    
    .nav-menu ul{
        display: none;
        gap: 15px;
        list-style: none;
        padding-top: 0.7rem;
    }

    .menu-bars {
        display: flex;
        font-size: 2rem;
        justify-content: space-between;
        background-color: transparent;
        padding: 0.7rem 0.9rem 0;
        // margin-right: -4rem;
        right: -15rem;
        color: white;
    }
}

/* *************MEDIA QUERIES (SMALL DEVICE)*********** */

@media  screen and (max-width: 600px) {
  .container {
    width: var(--container-width-sm);
  }  

  .class-width {
        padding: 0.8rem 4%;
    }

    
}
`