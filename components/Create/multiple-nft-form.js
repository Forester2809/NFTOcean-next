import Link from "next/link"

const MultipleNftform=()=>{
return(
<>
<div className="item_create__wrapper bg-body-2 section_gap_y_top__3 section_gap_y_bottom__1">
<div className="container">
<div className="row justify-content-between gy-4">
<div className="col-lg-4 col-md-7 col-sm-10">
    <div className="create__preview">
        <h5>Preview</h5>
        <div className="preview_card__style">
            <div className="preview__cover">
                <div className="preview__thumb">
                    <img src="/images/others/preview-thumb.png" alt=""/>
                </div>
                <div className="avater__group">
                    <img src="/images/nft/ag-one.png" alt=""/>
                    <img src="/images/nft/ag-two.png" alt=""/>
                    <img src="/images/nft/ag-three.png" alt=""/>
                    <img src="/images/icons/tick-blue.svg" alt="" className="user__tick"/>
                </div>
            </div>
            <div className="preview__disc">
                <span className="seller">Desmond Eagle</span>
                <div className="preview__title">
                    <h5 className="pb-0">Abstract Painting</h5>
                    <ins className="current-price">
                        <img src="/images/icons/tri-flash-blue.svg" alt=""/>
                        <span>0.01 ETH</span></ins>
                </div>
            </div>
            <div className="preview__bottom">
                <ul className="preview__actions d-flex">
                    <li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0.0732541 11.2132L6.47058 0.254439C6.65303 -0.0648577 7.10917 -0.0876645 7.32584 0.208825L9.10477 2.59215C9.61793 3.27636 9.65217 4.20003 9.20743 4.92986L5.39865 11.0307C5.02234 11.6351 4.36096 12 3.64254 12H0.518006C0.118885 11.9886 -0.132008 11.5553 0.0732541 11.2132Z"
                                fill="currentColor"></path>
                            <path
                                d="M10.5415 7.55271L8.35206 11.2018C8.1468 11.5439 8.39769 11.9887 8.79681 11.9887H13.1757C13.5748 11.9887 13.8257 11.5553 13.6205 11.2018L11.431 7.55271C11.2372 7.22201 10.7468 7.22201 10.5415 7.55271Z"
                                fill="currentColor"></path>
                        </svg></li>
                    <li><svg width="14" height="12" viewBox="0 0 14 12" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.6985 1.99765L6.99742 2.1692L7.2962 1.99743C7.50862 1.8753 7.71506 1.74828 7.92067 1.62177C8.31313 1.38029 8.70258 1.14066 9.12479 0.940522C9.75536 0.641607 10.2727 0.531212 10.6931 0.653546C13.0724 1.35159 13.8419 3.69977 13.1616 5.63257L13.1605 5.63569C12.6276 7.17674 11.1864 8.58658 9.76123 9.65606C8.42345 10.66 7.1915 11.297 6.99824 11.3948C6.80115 11.2956 5.58162 10.6685 4.25227 9.67217C2.8336 8.60887 1.38875 7.19728 0.835985 5.63289C0.154691 3.69818 0.922552 1.34972 3.29816 0.653425L3.29875 0.653253C3.73433 0.525103 4.24488 0.633423 4.86272 0.928388C5.27058 1.1231 5.64246 1.35367 6.02504 1.59088C6.24316 1.72612 6.46476 1.86351 6.6985 1.99765Z"
                                stroke="currentColor" strokeWidth="1.2"></path>
                        </svg> <span>3</span>
                    </li>
                </ul>

                <ins className="preview__countdown">Ends in <span>11:21:36</span></ins>
            </div>
        </div>
    </div>

    <div className="create__condition">
        <h6>Note:</h6>
        <ul className="conditions">
            <li>Service fee : <span>2.5%</span></li>
            <li>You will receive : <span>25.00 ETH $50,000</span></li>
        </ul>
    </div>
</div>
<div className="col-lg-7">
    <div className="item_create__details">
        <div className="create__header">
            <h2>Create
                Multiple <br/> Collectible</h2>
            <Link href="/create-single-nft"><a className="switch-btn">Switch to Single</a></Link>
        </div>

        <h5 className="create_sub">Upload file</h5>
        <p className="pb-3"> Drag or choose your file to upload</p>

        <form action="/file-upload" className="dropzone dropzone-area">
        
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
                
        </form>

        <form action="#" id="create_item_form" className="pt-5">
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
                <input type="checkbox" className="item__check" checked onClick={e=>{}}/>
            </div>
            <div className="item_single__check mt-2">
                <div>
                    <h6>Instant sale price</h6>
                    <p>Enter the price for which the item will be instantly sold</p>
                </div>
                <input type="checkbox" className="item__check" checked onClick={e=>{}}/>
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
        </form>
    </div>
    
</div>
</div>
</div>
</div>
</>
)
}
export default MultipleNftform