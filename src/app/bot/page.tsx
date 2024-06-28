import Form from "../components/Form";

const Bot = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div className="main-section pt-16">
          <h1 className="text-center text-5xl mb-6">EDbotcito</h1>
          <div className="app-section">
            <Form/>
          </div>
        </div>
      </div>
    </main>
    )
}

export default Bot