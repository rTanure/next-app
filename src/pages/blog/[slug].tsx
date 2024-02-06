import { GetStaticPaths, GetStaticProps } from "next"

interface BlogProps {
  date: string
}

export default function BlogPost({ date }: BlogProps) {
  return <h1>{date}</h1>
}


// Cria uma versão estática em cache das páginas
export const getStaticPaths: GetStaticPaths = async () => {
  // Pegar os posts mais lidos...
  // Array vazio pega os que forem acessados
  return {
    paths: [], // Listas dos posts que serão gerados estaticamente
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString()
    },
    revalidate: 5 // Quantos segundos até uma proxima chamada | Não funciona em server de desenvolvimento
  }
}