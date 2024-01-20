export default function AboutUs() {
  return (
    <section className="w-full py-20 bg-slate-100">
      <div className="container max-w-3xl grid grid-cols-2">
        <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-xs h-96 back-image">
                <img src="https://plus.unsplash.com/premium_photo-1689562473471-6e736b8afe15?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-full h-full object-cover custom-rounded" />
            </div>
        </div>
        <article>
            <h2 className="text-right text-3xl text-orange-700 font-bold tracking-widest">Sobre nós...</h2>
            <div className="w-full flex justify-end">
                <div className="w-full max-w-32 h-1 bg-orange-600 mt-5"></div>
            </div>
            <p className="text-sm text-right mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer interdum, odio sed finibus viverra, dui dolor viverra urna, id fringilla orci nibh vel ligula. Aliquam semper mollis venenatis. Vivamus nec dapibus massa, nec pulvinar nulla. Aliquam lobortis lacus ac nunc hendrerit, et aliquet tortor vulputate. Nulla non dolor at sem blandit interdum. Donec sit amet euismod erat, id dictum odio. Sed scelerisque tempor ligula. Etiam id odio suscipit, congue felis ac, semper diam. In ultricies rutrum tellus. Etiam id magna id dolor rutrum hendrerit et vel elit.</p>
        </article>
      </div>
    </section>
  );
}
