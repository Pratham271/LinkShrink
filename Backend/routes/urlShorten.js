const {Router} = require('express')
const { Url } = require('../db')

const router = Router();

function RandomTag(){
const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomId = '';
  for (let i = 0; i < 6; i++) {
    randomId += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomId;
}
router.post('/short', async(req,res)=> {
    const url = req.body.url;
    const tag = req.body.tag;
   try {
    if(!tag){
        const newTag = RandomTag()
        const dbUrl = await Url.findOne({newTag})
        if(dbUrl!==null && dbUrl.tag && dbUrl.url===url){
            return res.status(200).json({
                shortenUrl: dbUrl.tag
            })
        }         
        else{
            const newTag = RandomTag()
            const dbUrl = await Url.create({
                tag: newTag,
                url: url
            })
            return res.status(201).json({
                shortenUrl: dbUrl.tag
            })
        }
    }

    const tagwithUrl = await Url.findOne({tag})
    if(tagwithUrl!==null && tagwithUrl.tag && tagwithUrl.url === url){
        return res.status(200).json({
            shortenUrl: tagwithUrl.tag
        })
    }
    else if(tagwithUrl!==null && tagwithUrl.url !== url && tagwithUrl.tag){
        return res.status(400).json({
            message: "Enter a new tag"
        })
    }
  
    if(!tagwithUrl){
        const shorten = await Url.create({
            tag:tag,
            url:url
        })
        res.status(201).json({
            shortenUrl: shorten.tag
        })
    }
  
   } catch (error) {
        res.status(500).json({
            errorMessage: error.message
        })
   }

})

router.get('/:id', async(req,res)=> {
    const id = req.params.id;
    try {
        const shorten = await Url.findOne({
            tag:id
        })
        if(!shorten){
            return res.status(400).json({
                message: "wrong url entered"
            })
        }
        res.redirect(shorten.url)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router
