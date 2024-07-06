export const LandingPage = () => {
  const posts = [
    {
      id: 1,
      title: "Selling Furniture for New Academic Year",
      href: "#",
      description:
        "Moving into a new place for the academic year? I've got comfy sofa: Ideal for lounging after a long day of classes.",
      date: "Jul 3, 2024",
      datetime: "2024-07-03",
      category: { title: "Selling", href: "#" },
      author: {
        name: "Emily Browns",
        role: "Sophomore",
        href: "#",
        imageUrl:
          "https://media.istockphoto.com/id/692793698/photo/portrait-of-a-happy-girl.jpg?s=612x612&w=0&k=20&c=JItqhGqjL0qX5c7LXXcpXj0FCxhPNtSwpAeye21fLrE=",
      },
    },
    {
      id: 1,
      title: "Exchange Meal Plan Swipes for Books!",
      href: "#",
      description:
        "Have extra meal plan swipes and looking to exchange them for books? Here's what I have available: Jerome Becomes A Genius, The Alchemist, The Little Lame Prince",
        date: "Jul 1, 2024",
        datetime: "2024-07-01",
        category: { title: "Buying", href: "#" },
        author: {
          name: "James Smith",
          role: "Junior",
        href: "#",
        imageUrl:
          "https://media.istockphoto.com/id/692793698/photo/portrait-of-a-happy-girl.jpg?s=612x612&w=0&k=20&c=JItqhGqjL0qX5c7LXXcpXj0FCxhPNtSwpAeye21fLrE=",
      },
    },
    {
      id: 1,
      title: "Exchange Meal Plan Swipes for Furniture",
      href: "#",
      description:
        "Hey everyone! Have extra meal plan swipes and looking to furnish your space for the semester?I've got some quality furniture up for exchange: reading lamp, electronic chargers",
        date: "Jun 25, 2024",
        datetime: "2024-06-25",
        category: { title: "Exchange", href: "#" },
        author: {
          name: "Olivia Johnson",
          role: "Freshman",
        href: "#",
        imageUrl:
          "https://media.istockphoto.com/id/692793698/photo/portrait-of-a-happy-girl.jpg?s=612x612&w=0&k=20&c=JItqhGqjL0qX5c7LXXcpXj0FCxhPNtSwpAeye21fLrE=",
      },
    },
  ];
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="-top-20-z-10 absolute inset-x-0 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="max-w-1xl py-15 mx-auto sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Create Your Renoon Same Account{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Buy and Sell Items Locally or Shipped
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to our platform where you can buy, sell, and trade furniture, goods, and other items, as well as
              exchange swipe (meal plans) with your friends.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From Renoon </h2>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};
