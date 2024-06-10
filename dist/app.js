"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.port = 3000;
// parser
app.use(express_1.default.json());
app.use(express_1.default.text());
// middleware
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
// create router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
// use router
app.use('/api/v1/users', userRouter);
app.use('/api/v1/course', courseRouter);
userRouter.post('/create-users', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'user is create successfully',
        data: user,
    });
});
courseRouter.post('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'course is create successfully',
        data: course,
    });
});
app.get('/', logger, (req, res) => {
    console.log(req.params);
    res.send('Hello Developer World!');
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.send('data');
});
exports.default = app;
