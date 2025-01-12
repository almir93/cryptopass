console.log("Wallet integration script loaded!");

const payWithSolana = (amount, recipient) => {
    const link = `solana:${recipient}?amount=${amount}&label=Donation&message=Thank+you+for+your+donation!`;
    window.location.href = link;
};

document.getElementById("donate-button").addEventListener("click", () => {
    payWithSolana("0.1", "4GjCnWhqUbw3SHiSDa64CoxZaKSvs77Hvi2TtebHC5es");
});
