import DataLoader from 'dataloader';#hello

interface RepositoriesContext {
  author: AuthorRepository;
  quote: QuoteRepository;
}

interface LoadersContext {
  author: DataLoader<number, Author>;
}

export default interface Context {
  repositories: RepositoriesContext;
  loaders: LoadersContext;
}
