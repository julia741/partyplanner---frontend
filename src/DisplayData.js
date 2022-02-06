
export default function DisplayData({data}) {
    const displayData =()=> {
        return data ? (
          data.map((data) => {
            return (
              <div className="data" >
                <h3>{data}</h3>
              </div>
            );
          })
        ) :(
          <h2>No data yet</h2>
        );
      }
      
      return (
       
        <div class="ui teal message ">
          
        {data}</div>
       
      )
      
}