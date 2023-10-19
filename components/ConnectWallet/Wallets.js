import ConWalletItem from "./wallets/WalletItem"

const ConWallets=()=>{
return(
<div className="wallet_grid_style bg-body-2 section_gap_y_top__2 section_gap_y_bottom__1">
<div className="container">
<div className="row justify-content-center">
    <div className="col-lg-7 text-center">
        <h2 className="inner-p-title">Connect wallet</h2>
        <p className="disc-text-2 pt-2">Connect with one of available wallet providers or create a new wallet.</p>
    </div>
</div>

<div className="row gy-4 pt-50">
   <ConWalletItem
    image="/images/client/w-logo-one.svg"
    populer={false}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

   <ConWalletItem
    image="/images/client/w-logo-two.svg"
    populer={true}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

   <ConWalletItem
    image="/images/client/w-logo-three.svg"
    populer={false}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

  <ConWalletItem
    image="/images/client/w-logo-four.svg"
    populer={false}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

   <ConWalletItem
    image="/images/client/w-logo-five.svg"
    populer={false}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

   <ConWalletItem
    image="/images/client/w-logo-six.svg"
    populer={false}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

   <ConWalletItem
    image="/images/client/w-logo-seven.svg"
    populer={false}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

   <ConWalletItem
    image="/images/client/w-logo-eight.svg"
    populer={true}
    title="Fortmatic"
    desc="Please connect your wallet to the transaction."
   />

</div>
</div>
</div>
)
}
export default ConWallets