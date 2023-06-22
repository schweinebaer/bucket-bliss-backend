const mongoose = require('mongoose');
const uuid = require('uuid');

const todosSchema = mongoose.Schema(
    {
        todos: [
            {
                _id: {
                    type: String,
                    default: uuid.v4
                },
                text: {
                    type: String,
                    required: true
                },
                completionDate: {
                    type: Date,
                    required: false
                },
                done: {
                    type: Boolean,
                    required: false
                }
            }
        ]
    },
    {
        timestamps: true
    }
);

const Todos = mongoose.model('Todos', todosSchema);
module.exports = Todos;