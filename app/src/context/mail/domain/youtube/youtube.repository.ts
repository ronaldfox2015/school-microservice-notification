export abstract class YoutubeRepository {
    /**
     * Busca videos en Youtube y devuelve una lista de URLs.
     * @param query El término de búsqueda.
     */
    abstract search(query: string): Promise<string[]>
}
