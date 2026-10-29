
type TitleType={
    Title: String
}


const Title = ({Title}: TitleType) => {
  return (
    <h1 className="uppercase font-bold mb-5 text-center text-3xl"> 
        {Title}
    </h1>
  )
}

export default Title