import React, { useEffect } from "react";
import "./Metamask.scss";
import { injected } from "./connectors";
import icon from "../../statics/metamask-icon.png";
import { useWeb3React } from "@web3-react/core";
// import Web3 from "web3";
const Metamask = () => {
    //   const web3 = await new Web3().currentProvider;
    const { active, account, library, connector, activate, deactivate } =
        useWeb3React();
    async function connect() {
        if (!window.ethereum) {
            alert("Install Metamask");
        } else {
            try {
                await activate(injected);
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

    return (
        <div>
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

export default Metamask;
