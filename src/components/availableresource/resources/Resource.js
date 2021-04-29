function Resource(props) {
    return(
        <div className="row py-3 m-5">
            <article className="card card-body col-5 m-1 col-lg-3 m-lg-3 text-center bg-dark">
                <p>{props.resource}</p>
            </article>
        </div>
    );
}

export default Resource;