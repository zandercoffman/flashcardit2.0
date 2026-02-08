declare module "spanishconjugator" {
  const SpanishConjugator: {
    SpanishConjugator: (verb: string, tense: string, mood: string, pronoun: string) => string
  }
  export default SpanishConjugator
}
