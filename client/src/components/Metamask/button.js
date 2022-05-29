import React, { useEffect } from "react";
import "./Metamask.scss";
import { injected } from "./connectors";
import icon from "../../statics/metamask-icon.png";
import { useWeb3React } from "@web3-react/core";
import Web3 from "web3";
import axios from "axios";

export const MetamaskButton = () => {
    const { active, account, library, connector, activate, deactivate } =
        useWeb3React();
    async function connect() {
        if (!window.ethereum) {
            alert("Install Metamask");
        } else {
            try {
                await activate(injected).then(async (res) => {
                    const web3 = new Web3(window.ethereum);
                    await web3.eth.personal
                        .sign("Hello world", account)
                        .then(async (signature) => {
                            console.log("signature", signature);
                            const res = await axios.post(
                                "http://localhost:3001/auth/sample-signature-verification",
                                {
                                    signature,
                                }
                            );
                        });
                });
                localStorage.setItem("isWalletConnected", true);
            } catch (err) {
                console.log(err);
            }
        }
    }

    //   async function disconnect() {
    //     try {
    //       await deactivate(injected);
    //       localStorage.getItem("isWalletConnected", false);

    //       //   await web3.eth.currentProvider.disconnect();
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   }
    useEffect(() => {
        const connectWalletOnPageLoad = async () => {
            if (localStorage?.getItem("isWalletConnected") === "true") {
                try {
                    await activate(injected);
                    localStorage.setItem("isWalletConnected", true);
                } catch (err) {
                    console.log(err);
                }
            }
        };
        connectWalletOnPageLoad();
    }, []);

    // async function onClickSign() {
    //     const web3 = await new Web3(window.ethereum);
    //     web3.eth.personal.sign("Hello world", account).then((signature) => {
    //         console.log("signature", signature);
    //         console.log({ signature });
    //     });
    // }

    // 	web3.eth.personal.sign('Hello world', account).then(async signature => {
    // 		console.log('signature', signature);

    // 		const res = await axios.post(
    // 			'http://localhost:3001/auth/sample-signature-verification',
    // 			{
    // 				signature,
    // 			},
    // 		);
    // 		console.log(res);
    // 		console.log({ signature });
    // 	});
    // }

    return (
        <div>
            {/* <button onClick={onClickSign}>lcick me</button> */}
            <button className="container" onClick={connect}>
                <div className="metamask-image-container">
                    <img src={icon} alt="metamask" className="metamask-image" />
                </div>
                {active === false ? (
                    <div className="wallet-text">Connect wallet</div>
                ) : (
                    <div className="wallet-connected">
                        {account.slice(0, 13) + "..."}
                    </div>
                )}
            </button>
        </div>
    );
};
