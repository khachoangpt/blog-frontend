export const getListBlog = async () => {
  const blog = await fetch('http://52.221.184.130/v1/api/customer/blog')

  return blog
}
