function Resources(props) {
    let items = props.items.map((item) =>
        <div className="card card-body col-4 m-1 col-lg-3 m-lg-3 text-center">{item}</div>
    );
    return(
        <div className="row py-3 m-5">
            {items}
        </div>
    );
}

export default Resources;