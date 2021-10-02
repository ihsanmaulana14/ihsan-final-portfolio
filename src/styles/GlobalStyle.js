import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* :root{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;

} */

.light-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #ff7675;
    --background-dark-color: #F1F1F1;
    --background-dark-grey: #e4e4e4;
    --border-color: #cbced8;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #151515;
    --font-light-color: #313131;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #E4E4E4;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    /* shadow title color */
    --sd-color:rgba(25, 29, 43, 0.07);
}
.dark-theme{
    --primary-color: #007bff;
    --primary-color-light: #057FFF;
    --secondary-color: #6c757d;
    --background-dark-color: #10121A;
    --background-dark-grey: #191D2B;
    --border-color: #2e344e;
    --background-light-color: #F1F1F1;
    --background-light-color-2: rgba(3,127,255,.3);
    --white-color: #FFF;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191D2B;
    --scrollbar-bg-color: #383838;
    --scrollbar-thump-color: #6b6b6b;
    --scrollbar-track-color: #383838;
    /* shadow title color */
    --sd-color:rgba(25,29,43,.44);
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    /* font-family: 'Nunito', sans-serif; */
    font-family: 'Poppins', sans-serif;
    /* font-size: 1.1rem; */
    font-size: 16px;
    scroll-behavior: smooth;
    
}

body{
    background-color: var(--background-dark-color);
    color: var(--font-light-color);
    transition: all .4s ease-in-out;
}


textarea{
    max-width: 100%;
}
a{
    font-family: inherit;
    color: inherit;
    font-size: inherit;
    font-size: 1rem;
}

h1{
    font-size: 4rem;
    color: var(--white-color);
    span{
        font-size: 4rem;
        @media screen and (max-width: 960px){
            font-size: 3rem
        }
        @media screen and (max-width: 768px){
            font-size: 2.2rem
        }
        @media screen and (max-width: 576px){
            font-size:  1.5rem
        }
    }
    @media screen and (max-width: 960px){
        font-size: 3rem
    }
    @media screen and (max-width: 768px){
            font-size: 2.2rem
        }
    @media screen and (max-width: 576px){
        font-size:  1.5rem
    }
}

span{
    color: var(--primary-color);
}
h6{
    color: var(--white-color);
    font-size: 1.2rem;
    padding-bottom: .6rem;
}

//Utilities
.u-margin-bottom{
    margin-bottom: 4rem;
}


//Floting Toggler
.light-dark-mode{
    position: fixed;
    right: 0;
    top: 50%;
    background-color: var(--background-light-color-2);
    width: 6.5rem;
    height: 2.5rem;
    z-index: 15;
    display: flex;
    align-items: center;
    justify-content: center;
    svg{
      display: flex;
      align-items: center;
      font-size: 1.7rem;
      color: var(--white-color);
    }
  }

  //Nav Toggler
  .header-l{
    width: 100%;
    padding-top: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 30;
    background-color: transparent;
    transition: all 0.4s ease-in-out;

    .container-l{
        
        height: 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media screen and (max-width: 576px){
            margin: 0 .5rem 0 .5rem;
        }
        @media screen and (min-width: 576px){
            margin: 0 1rem 0 1rem;
        }
        .ham-burger-menu{
            background-color: var(--background-dark-color);
            border-radius: 10%;
            z-index: 15;
            svg{
                font-size: 2.2rem;
                @media screen and (min-width: 576px){
                    font-size: 3rem;
                  }
              }
          }
          .ham-burger-avatar{
              background-color: var(--background-dark-color);
              border-radius: 10%;
              z-index: 15;
              img{
                  width: 30px;
                  height: auto;
                  @media screen and (min-width: 576px){
                      width: 40px;
                  }
              }
          }
          .ham-burger-theme{
              background-color: var(--background-dark-color);
              border-radius: 10%;
              z-index: 15;
              cursor: pointer;
             
              svg{
                font-size: 1.8rem;
                @media screen and (max-width: 576px){
                    font-size: 1.5rem;
                  }
              }
          }
        }
    }
    
    @media screen and (min-width: 576px){
        .nav-toggle{
            margin-left: -6.3rem;
        }
        .nav-toggle-header{
            padding-left: -6.3rem;
        }
        ._header{
            padding-left: 6.3rem;
        }
        .nav-toggle-main{
            margin-left: 0rem;
        }
    }
    @media screen and (max-width:576px){
        .nav-toggle{
        margin-left: -4.3rem;
        }
        .nav-toggle-header{
        padding-left: -4.3rem;
        }
        ._header{
            padding-left: 4.3rem;
        }
        .nav-toggle-main{
            margin-left: 0rem;
        }
    }
  .ham-burger-menu{
        display: block;
    }
  

  .nav-toggle-skills{
        display: grid;
        animation: fadeInTop 1s ease;
    }
  .nav-toggle-resume{
        display: grid;
        animation: fadeInTop 1s ease;
    }
    .hidden{
        display: none;
    }
    .tabs {
        background-color: transparent;
        color: gray;
    }
    .active-tabs {
        color: var(--white-color);
        border-bottom: 3px solid #0b335f;
        display: grid;
    }
    .contents{
        display: none;
        justify-content: center;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    }
    .active-content{
        display: block;
    }


//Global Media Queries



`;

export default GlobalStyle;
