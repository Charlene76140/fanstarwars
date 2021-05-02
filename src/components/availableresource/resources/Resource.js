function Resource(props) {
    return(
        <div className="col-6 col-sm-4 col-lg3">
            <article className="text-center bg-dark py-5 my-3 sizeCard">
                <p>{props.resource}</p>
            </article>
        </div>
    );
}

export default Resource;