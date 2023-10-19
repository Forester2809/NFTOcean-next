// import Dropzone from 'react-dropzone'
import Link from "next/link"

const SingleNftForm=()=>{
return(
<div className="item_create__details">
<div className="create__header">
    <h2>Create
        Single <br/> Collectible </h2>
    <Link href="/create-multiple-nft"><a className="switch-btn">Switch to Maltiple</a></Link>
</div>

<h5 className="create_sub">Upload file</h5>
<p className="pb-3"> Drag or choose your file to upload</p>

<div className="dropzone dropzone-area">

    <div className="dz-default dz-message">
        <div className="upload__icon">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.96 7.39999C18.56 7.70999 20.03 9.55999 20.03 13.61V13.74C20.03 18.21 18.24 20 13.77 20H7.26C2.79 20 1 18.21 1 13.74V13.61C1 9.58999 2.45 7.73999 5.99 7.40999"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.5195 13.5V2.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" />
                <path d="M13.8699 4.35L10.5199 1L7.16992 4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>
        </div>
        <span className="file__type">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</span>
    </div>
        
</div>

<div id="create_item_form" className="pt-5">
    <h5 className="create_sub">Item Details</h5>
    <div className="custom_input__style pt-4">
        <label htmlFor="product__name">Your Name</label>
        <input type="text" id="product__name" placeholder="e. g. `wme design art`with Photography"/>
    </div>
    <div className="custom_input__style pt-20">
        <label htmlFor="product__disc">Description (optional)</label>
        <input type="text" id="product__disc" placeholder="e. g. `wme design art`with Photography"/>
    </div>

    <div className="row">
        <div className="col-lg-3 col-md-6 pt-20">
            <div className="custom_input__style">
                <label htmlFor="product__price">Price</label>
                <input type="text" id="product__price" placeholder="e. g. `20$`"/>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 pt-20">
            <div className="custom_input__style">
                <label htmlFor="product__size">Size</label>
                <input type="text" id="product__size" placeholder="e. g. Size"/>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 pt-20">
            <div className="custom_input__style">
                <div className="select_style__one varient-2">
                    <label>ROYALTIES</label>
                    <select className="select__nice">
                        <option data-display="10%">10%</option>
                        <option value="1">20%</option>
                        <option value="2">40%</option>
                        <option value="3">60%</option>
                        <option value="4">80%</option>
                    </select>
                </div>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 pt-20">
            <div className="custom_input__style">
                <label htmlFor="product__propertie">PROPERTIE</label>
                <input type="text" id="product__propertie" placeholder="e. g. PROPERTIE"/>
            </div>
        </div>
    </div>

    <div className="item_single__check mt-40">
        <div>
            <h6>Put on sale</h6>
            <p>You’ll receive bids on this item</p>
        </div>
        <input type="checkbox" className="item__check" checked
         onChange={e=>{}}
        />
    </div>
    <div className="item_single__check mt-2">
        <div>
            <h6>Instant sale price</h6>
            <p>Enter the price for which the item will be instantly sold</p>
        </div>
        <input type="checkbox" className="item__check" checked
         onChange={e=>{}}
        />
    </div>
    <div className="item_single__check mt-2">
        <div>
            <h6>Unlock once purchased</h6>
            <p>Content will be unlocked after successful transaction</p>
        </div>
        <input type="checkbox" className="item__check" />
    </div>

    <div className="form_bottom mt-40">
        <button type="submit" className="submit-v2">Submit Item</button>
    </div>
</div>
</div>
)
}
export default SingleNftForm