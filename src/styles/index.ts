import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Main = styled.main`
    .first {
        background: #f5f1ea;
        overflow: hidden;

        .offset {
            width: 100%;
            height: 100%;
        }

        .a {
            background: #f5f1ea;
            height: 100%;
            display: flex;
            align-items: flex-end;

            position: relative;

            .hero-title {
                position: absolute;
                top: 220px;
                left: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width: 1280px;
                margin: 0px auto;

                .hero-title-content {
                    margin: 0px 60px;
                    width: 635px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    > h1 {
                        font-size: 60px;
                        font-weight: 300;
                        line-height: 1.2em;
                        margin-bottom: 26px;
                        color: #262627;
                    }

                    > p {
                        font-size: 24px;
                        line-height: 1.4em;
                        width: 390px;
                        margin: 0px 0px 20px;
                    }

                    .spacer {
                        margin-top: 40px;

                        .secondary {
                            margin-right: 16px;
                            padding: 8px 16px;
                            border: 1px solid rgb(38, 38, 39);
                            border-radius: 6px;
                            color: #FFFFFF;
                            line-height: 24px;
                            display: inline-block;
                            background: #262627;
                            white-space: nowrap;
                            cursor: pointer;
                            transition: all 0.3s;
                        }

                        .secondary:hover {
                            opacity: 0.7;
                        }

                        > a {
                            color: #262627;
                            margin-left: 32px;
                            text-decoration: underline;
                            cursor: pointer;
                        }
                    }
                }
            }

            .form-block {
                position: absolute;
                top: 290px;
                left: 0;
                right: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                max-width: 1280px;
                margin: 0px auto;

                .form-block-content {
                    margin: 0px 60px;
                    width: 535px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    > span {
                        font-size: 15px;
                        line-height: 1.2rem;
                        color: #262627;
                    }

                    > input {
                        font-size: 30px;
                        line-height: unset;
                        color: white;
                        padding: 0px 0px 8px;
                        margin-top: 32px;
                        width: 100%;
                        outline: none;
                        border: none;
                        border-bottom: 1px solid rgb(255, 255, 255, 0.4); 
                        background: transparent;


                        &::placeholder {
                            color: rgb(255, 255, 255, 0.4)
                        }

                        &:focus{
                            outline: none;
                            border-bottom: 2px solid rgb(255, 255, 255); 

                        }
                    }
                }
            }

            .left-side {
                width: 50%;
                height: 100%;
                background: #7dbb91;
            }

            .right-side {
                width: 50%;
                height: 100%;

                .right-image {
                    background: #7dbb91;
                    background-image: url('https://images.unsplash.com/photo-1600789385431-f0f6b9b56272?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: contain;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .b {
            background: #582534;
            width: 100%;
            height: 100%;
            display: flex;
            
            .left-side {
                width: 50%;
                height: 100%;
                background: #582534;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .content {
                    > span {
                        font-size: 18px;
                        line-height: 1.2rem;
                        color: rgba(255, 255, 255, 0.9);
                    }

                    .select {
                        display: flex;
                        flex-direction: column;
                        margin-top: 24px;

                        > a {
                            color: rgba(255, 255, 255, 0.9);
                            font-size: 20px;
                            text-decoration: none;
                            text-align: center;
                            padding: 8px 8px;
                            background: rgba(255, 255, 255, 0.1);
                            border: 1px solid rgba(255, 255, 255, 0.9); 
                            border-radius: 2px;
                            cursor: pointer;
                        }

                        > a:last-child {
                            border-top: none;
                        }
                    }

                }
            }

            .right-side {
                width: 50%;
                height: 100%;

                .right-image {
                    background: #582534;
                    background-image: url('https://images.unsplash.com/photo-1557176529-ca2474ad7495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .c {
            background: #0a7397;
            background-image: url('https://media.giphy.com/media/h2f2Ef7sC23JN5lFsp/giphy.gif');
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            width: 100%;
            height: 100%;
        }
    }

    .second {
        background: #FFFFFF;
    }
`;

export const Section = styled.div`
    position: relative;
`;

export const Sticky = styled(motion.div)`
    height: 100vh;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
`;