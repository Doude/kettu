describe 'SortTorrentsHelpers'
  before_each
    sort_helpers = kettu.SortTorrentsHelpers;
  end

  it 'should be sortable by name'
    var torrents = [
      kettu.Torrent({'id': '1', 'name': 'Zelda'}),
      kettu.Torrent({'id': '2', 'name': 'Alpha'}),
      kettu.Torrent({'id': '3', 'name': 'Manfred'})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('name', torrents)
    sorted_torrents[0].id.should.eql('2')
    sorted_torrents[1].id.should.eql('3')
    sorted_torrents[2].id.should.eql('1')
  end
  
  it 'should be sortable by activity'
    var torrents = [
      kettu.Torrent({'id': '1', 'rateDownload': 0, 'rateUpload': 0}),
      kettu.Torrent({'id': '2', 'rateDownload': 512, 'rateUpload': 256}),
      kettu.Torrent({'id': '3', 'rateDownload': 512, 'rateUpload': 5})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('activity', torrents)
    sorted_torrents[0].id.should.eql('1')
    sorted_torrents[1].id.should.eql('3')
    sorted_torrents[2].id.should.eql('2')    
  end

  it 'should be sortable by age'
    var torrents = [
      kettu.Torrent({'id': '1', 'addedDate': 20100102}),
      kettu.Torrent({'id': '2', 'addedDate': 20100201}),
      kettu.Torrent({'id': '3', 'addedDate': 20100115})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('age', torrents)
    sorted_torrents[0].id.should.eql('2')
    sorted_torrents[1].id.should.eql('3')
    sorted_torrents[2].id.should.eql('1')    
  end

  it 'should be sortable by progress'
    var torrents = [
      kettu.Torrent({'id': '1', 'sizeWhenDone': 100, 'leftUntilDone': 0, 'uploadedEver': 0, 'downloadedEver': 100}),
      kettu.Torrent({'id': '2', 'sizeWhenDone': 100, 'leftUntilDone': 50, 'uploadedEver': 30, 'downloadedEver': 50}),
      kettu.Torrent({'id': '3', 'sizeWhenDone': 100, 'leftUntilDone': 50, 'uploadedEver': 20, 'downloadedEver': 50}),
      kettu.Torrent({'id': '4', 'sizeWhenDone': 100, 'leftUntilDone': 100, 'uploadedEver': 0, 'downloadedEver': 0})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('progress', torrents)
    sorted_torrents[0].id.should.eql('4')
    sorted_torrents[1].id.should.eql('3')
    sorted_torrents[2].id.should.eql('2')
    sorted_torrents[3].id.should.eql('1')
  end

  it 'should be sortable by queue'
    var torrents = [
      kettu.Torrent({'id': '2'}),
      kettu.Torrent({'id': '1'}),
      kettu.Torrent({'id': '3'})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('queue', torrents)
    sorted_torrents[0].id.should.eql('1')
    sorted_torrents[1].id.should.eql('2')
    sorted_torrents[2].id.should.eql('3')    
  end

  it 'should be sortable by state'
    var torrents = [
      kettu.Torrent({'id': '1', 'status': 16}),
      kettu.Torrent({'id': '2', 'status': 4}),
      kettu.Torrent({'id': '3', 'status': 8})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('state', torrents)
    sorted_torrents[0].id.should.eql('2')
    sorted_torrents[1].id.should.eql('3')
    sorted_torrents[2].id.should.eql('1')    
  end
  
  it 'should sort reverse if reverse is true'
    var torrents = [
      kettu.Torrent({'id': '1', 'rateDownload': 0, 'rateUpload': 0}),
      kettu.Torrent({'id': '2', 'rateDownload': 512, 'rateUpload': 256}),
      kettu.Torrent({'id': '3', 'rateDownload': 512, 'rateUpload': 5})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('activity', torrents, true)
    sorted_torrents[0].id.should.eql('2')
    sorted_torrents[1].id.should.eql('3')
    sorted_torrents[2].id.should.eql('1')
  end
  
  it 'should not sort reverse if reverse if false'
    var torrents = [
      kettu.Torrent({'id': '1', 'rateDownload': 0, 'rateUpload': 0}),
      kettu.Torrent({'id': '2', 'rateDownload': 512, 'rateUpload': 256}),
      kettu.Torrent({'id': '3', 'rateDownload': 512, 'rateUpload': 5})
    ]
    var sorted_torrents = sort_helpers.sortTorrents('activity', torrents, false)
    sorted_torrents[0].id.should.eql('1')
    sorted_torrents[1].id.should.eql('3')
    sorted_torrents[2].id.should.eql('2')
  end
end