const { ServiceTypeTask } = require('../service')
const service = new  ServiceTypeTask()


class TypeTaskController {
   
   static async getAllRegistries(req, res){
      try {
         const allRegister = await service.getAllRegistries()
         console.log('chegou aqui: ', allRegister)
         return res.status(200).json(allRegister)   
      } catch (error) {
         return res.status(500).json({ message: error })
      }
   }

   static async createRegistry(req, res){
      try {
         const datas = req.body
         const newTypeUser = await service.createRegistry(datas)
         return res.status(200).json(newTypeUser)
         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }
   
   static async deleteRegistry(req, res){
      try {
         const { id } = req.params
         const deletedRegistry = await service.deleteRegistry(id);
         if(deletedRegistry){
            return res.status(200).json({ message: `Tipo de tarefa ${id} deletado`})
         }else{
            return res.status(200).json({ message: `Nenhum informação encontrada`})
         }         
      } catch (error) {
         return res.status(500).json(error.message)
      }
   }

   static async updateRegistry(req, res){
      try {
         const { id } = req.params
         const newInfo = req.body
         const updatedRegistry =  await service.updateRegistry(newInfo, Number(id));
         
         if(!updatedRegistry[0]){
            return res.status(200).json({ message: `Nenhum informação encontrada`})   
         }

         return res.status(200).json({ message: `Usuario ${id} atualizado`})
      } catch (error) {
         return res.status(500).json(error.message) 
      }
   }

   static async getOneRegistry(req, res){
      try {
         const { id } = req.params
         const registry = await service.getOneRegistry(Number(id))

         if(!registry){
            res.status(200).json({message: `Nenhum tipo de tarefa com este id ${id}`})   
         }

         res.status(200).json(registry)
      } catch (error) {
         return res.status(500).json(error)
      }
   }

}


module.exports = TypeTaskController