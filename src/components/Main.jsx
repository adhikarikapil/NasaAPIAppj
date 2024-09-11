export default function Main({ data }) {
  return (
    <>
      <div className="imgContainer">
        <img src={data.url} alt="mars-demo-picture" className="bgImage" />
      </div>
    </>
  );
}
