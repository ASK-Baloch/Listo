const IdPage = ({params}:{params:{id:string}}) => {
    return (
        <div className="text-sky-500"> Id:{params.id} </div>
    )
}

export default IdPage