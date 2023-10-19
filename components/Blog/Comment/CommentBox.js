
const BlogCommentBox=()=>{
return(
<div className="blog_commment__form pt-60">
    <h4 className="comt__count pb-4">Leave a reply</h4>

    <form action="#">
        <div className="row">
            <div className="col-lg-6">
                <div className="custom_input__style">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name"/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="custom_input__style">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </div>
            </div>
            <div className="col-lg-12 pt-3">
                <div className="custom_input__style">
                    <label htmlFor="massege">Your Comment</label>
                    <textarea id="massege" cols="30" rows="5" placeholder="Write a Comment"></textarea>
                </div>
            </div>
            <div className="submit__btn mt-30">
                <button type="submit" className="submit-v1">Send Message</button>
                </div>
        </div>
    </form>
</div>
)
}
export default BlogCommentBox