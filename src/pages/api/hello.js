export default async (req, res) => {
  await res.revalidate('/')

  return res.status(200).json({name: "Hello world!"})
}