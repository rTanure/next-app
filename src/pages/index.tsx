import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"

interface HomeProps {
  repositories: string[]
  date: string
}

export default function Home({ repositories, date }: HomeProps) {
  return (
    <>
      <h1>{date}</h1>
      <ul>
        {repositories.map((repo) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  )
}



// Captura os dados antes de renderizar a tela e enviar para o cliente
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/rTanure/repos')
  const data = await response.json()
  const repositoryNames = data.map((item: { name: string }) => item.name)
  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString()
    },
    revalidate: 60 * 60 * 4 // Quantos segundos até uma proxima chamada | Não funciona em server de desenvolvimento
  }
}