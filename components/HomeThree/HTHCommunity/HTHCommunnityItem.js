
const HTHCommunityItem=(props)=>{
return(
<div className="col-lg-3 col-sm-6">
    <div className="nft_process__card">
        <div className="process__icon">
            <img src={props.image} alt=""/>
        </div>
        <h5>{props.title}</h5>
        <p>{props.desc}</p>
    </div>
</div>
)
}
export default HTHCommunityItem