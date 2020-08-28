using FullCoreApi.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FullCoreApi.Controllers
{
    public class ReadersController: ControllerBase
    {
        readonly ReaderContext readerContext_;
        public ReadersController(ReaderContext readerContext)
        {
            readerContext_ = readerContext;
        }
        [HttpGet]
        [Route("api/[controller]")] //api/readers
        public IEnumerable<Reader> GetReaders()
        {
            return readerContext_.Readers;
        }

        [HttpGet]
        [Route("api/[controller]/{id}")] //api/readers/4
        public IEnumerable<Reader> GetReaderById(int id)
        {
            return readerContext_.Readers;
        }
    }
}
