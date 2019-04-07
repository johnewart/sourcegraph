import { BehaviorSubject, Subscribable } from 'rxjs'
import { TextDocument } from 'sourcegraph'

/**
 * A text model is a text document and associated metadata.
 *
 * How does this relate to editors (in {@link EditorService}? A model is the file, an editor is the
 * window that the file is shown in. Things like the content and language are properties of the
 * model; things like decorations and the selection ranges are properties of the editor.
 */
export interface TextModel extends Pick<TextDocument, 'uri' | 'languageId' | 'text'> {}

/**
 * The model service manages document contents and metadata.
 *
 * See {@link Model} for an explanation of the difference between a model and an editor.
 */
export interface ModelService {
    /** All known models. */
    models: Subscribable<readonly TextModel[]>

    /**
     * Adds a model.
     *
     * @params model The model to add.
     */
    addModel(model: TextModel): void

    /**
     * Removes a model.
     *
     * @params uri The URI of the model to remove.
     */
    removeModel(uri: string): void

    /**
     * Removes all models.
     */
    removeAllModels(): void
}

/**
 * Creates a new instance of {@link createModelService}.
 */
export function createModelService(): ModelService {
    const models = new BehaviorSubject<readonly TextModel[]>([])
    return {
        models,
        addModel: model => {
            if (models.value.some(m => m.uri === model.uri)) {
                throw new Error(`model already exists with URI ${model.uri}`)
            }
            models.next([...models.value, model])
        },
        removeModel: uri => {
            models.next(models.value.filter(m => m.uri !== uri))
        },
        removeAllModels: () => models.next([]),
    }
}
