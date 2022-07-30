import styled from 'styled-components'

export const Buttons = styled.button`
  .buttons {  
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 30px;
    gap: 10px;
    width: 363px;
    height: 55px;
    background: #5C2CC7;
    border-radius: 10px;
    margin-top:4rem;
    margin: 0 auto;
}
     .btn button {
        background-color: transparent;
        border: none;
        outline: none;
        color: white;
        cursor: pointer;
    }
    
/* *************MEDIA QUERIES (MEDIUM DEVICES) */

@media screen and (max-width: 1024px) {
  .container {
    width: var(--container-width-md);
  } 
  
  

  .buttons {
    width: 263px;
    
  }
    
}
    `

export const HeroSections = styled.section`
    height: 100vh;
    background-image: url('/src/assets/Circuit.png');
    background-position: center;
    background-size: cover;
    max-width:100%;
    position: relative;
    background-size: 100%;
    top: 0;
    left:0;
    z-index: -1;


.layout {

    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
    flex-direction: row-reverse;
    gap: 1rem;
    max-width:100%
}

.heropage-text {
    width: 50%;
    padding-top: 4rem
}

    h1 {
    font-family: 'Geomanist';
    font-weight: 500;
    font-size: 44px;
    line-height: 44px;
    display: flex;
    align-items: center;
    color: #32376F;
    margin-bottom: 1.5rem;
}

    p {
    font-family: 'Geomanist';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #32376F;
    margin-bottom: 3rem;
}



.hero-image {
    border-radius:50%;
    border: 4px solid #5C2CC7;
    max-width: 100%;
    width:400px;
    height: 400px;

}
.hero-image img {
        border-radius:50%;
        display: flex;
        justify-content:center;
        height: 400px;
        max-width:100%;
        width: 100%;
        
    }


/* *************MEDIA QUERIES (MEDIUM DEVICES) */

@media screen and (max-width: 1024px) {
  .container {
    width: var(--container-width-md);
  }  

  .layout {
    display: block;
    justify-content: center;
    padding-top: 4rem;
    row-gap: 8rem;
    max-width:100%;
    align-items: center;
    text-align: center;
}
.heropage-text {
    width: 90%;
    margin: 0 auto;
    padding-top: 2rem;
}

.hero-image {
    border-radius:50%;
    border: 4px solid #5C2CC7;
    max-width: 100%;
    width:300px;
    height: 300px;
    margin: 0 auto;

}
.hero-image img {
        border-radius:50%;
        height: 300px;
        max-width:100%;
        width: 100%;
        
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

