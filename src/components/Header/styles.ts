import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.header)`
    width: 100%;
    height: 170px;
    background: transparent;
    position: fixed;
    top: 0;
    z-index: 999;

    .header-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        max-width: 1200px;
        margin: 0px auto;
        padding: 32px 24px;

        .logo {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;
            cursor: pointer;

            > h1 {
                font-size: 26px;
                font-weight: 500;
            }
        }

        nav {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: center;

            .informations {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                margin-right: 32px;

                > ul {
                    display: flex;
                    list-style: none;
                    padding: 0px;
                    margin: 1em 0px;
                    line-height: 1.2;
                    align-items: center;

                    > li {
                        text-align: center;
                        margin-right: 24px;
                        padding: 24px 0px;
                        color: #262627;
                        font-size: 15px;
                        white-space: nowrap;
                        cursor: pointer;
                    }

                    > li:last-child {
                        text-align: center;
                        padding: 24px 0px;
                        white-space: nowrap;
                        margin: 0;

                        > div {
                            white-space: nowrap;
                            color: white;
                            background-color: #DB3B26;
                            border-radius: 4px;
                            font-size: 15px;
                            padding: 1px 3px;
                        }
                    }
                }
            }    

            .access {
                display: flex;
                align-items: center;

                .primary {
                    margin-right: 16px;
                    padding: 8px 16px;
                    border: 1px solid rgb(38, 38, 39);
                    border-radius: 2px;
                    color: rgb(38, 38, 39);
                    line-height: 24px;
                    display: inline-block;
                    background: transparent;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all 0.2s;
                }

                .secondary {
                    margin-right: 16px;
                    padding: 8px 16px;
                    border: 1px solid rgb(38, 38, 39);
                    border-radius: 2px;
                    color: #FFFFFF;
                    line-height: 24px;
                    display: inline-block;
                    background: #262627;
                    white-space: nowrap;
                    cursor: pointer;
                    transition: all 0.3s;
                }

                .primary:hover,
                .secondary:hover {
                    opacity: 0.7;
                }
            }
        }
    }
`;
