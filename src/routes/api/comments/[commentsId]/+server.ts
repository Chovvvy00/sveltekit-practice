import { comments } from '$lib/comments'
import { json } from '@sveltejs/kit'

export function GET(requestEvent) {
    const { params } = requestEvent
    const { commentsId } = params

    const result = comments.find(
        (comment) => comment.id === parseInt(commentsId)
    )

    if(!result) {
        return json('No Comment found!', { status: 404 })
    }

    console.log(result)

    return json(result, {status: 200})

}